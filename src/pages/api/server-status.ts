import type { APIRoute } from 'astro';

const SERVER_IP = '88.99.253.242';
const SERVER_PORT = 2302;
const QUERY_PORT = 2303;

// DayZ Server Query - Using public server query services
async function queryDayZServer(ip: string, queryPort: number) {
  // Try multiple query methods for reliability
  const queryMethods = [
    // Method 1: GameTracker API
    async () => {
      const response = await fetch(
        `https://api.gametracker.com/server_info/${ip}:${queryPort}/?format=json`,
        {
          headers: { 'Accept': 'application/json' },
        }
      );
      if (!response.ok) throw new Error('GameTracker failed');
      const data = await response.json();
      return {
        name: data.hostname || 'LAST BULLET DayZ',
        map: data.map || 'Chernarus',
        players: parseInt(data.players || '0', 10),
        maxPlayers: parseInt(data.maxplayers || '60', 10),
        online: data.online === '1' || data.online === true,
        ip: SERVER_IP,
        port: SERVER_PORT,
      };
    },
    // Method 2: Steam API (if server is registered)
    async () => {
      const response = await fetch(
        `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=public&filter=addr\\${ip}:${queryPort}`,
        {
          headers: { 'Accept': 'application/json' },
        }
      );
      if (!response.ok) throw new Error('Steam API failed');
      const data = await response.json();
      if (data.response?.servers?.[0]) {
        const server = data.response.servers[0];
        return {
          name: server.name || 'LAST BULLET DayZ',
          map: server.map || 'Chernarus',
          players: parseInt(server.players || '0', 10),
          maxPlayers: parseInt(server.max_players || '60', 10),
          online: true,
          ip: SERVER_IP,
          port: SERVER_PORT,
        };
      }
      throw new Error('No server data');
    },
  ];

  // Try each method until one succeeds
  for (const method of queryMethods) {
    try {
      return await method();
    } catch (error) {
      continue;
    }
  }

  // If all methods fail, return default offline status
  return {
    name: 'LAST BULLET DayZ',
    map: 'Chernarus',
    players: 0,
    maxPlayers: 60,
    online: false,
    ip: SERVER_IP,
    port: SERVER_PORT,
  };
}

export const GET: APIRoute = async () => {
  try {
    const serverStatus = await queryDayZServer(SERVER_IP, QUERY_PORT);
    
    return new Response(JSON.stringify(serverStatus), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch server status',
        name: 'LAST BULLET DayZ',
        map: 'Chernarus',
        players: 0,
        maxPlayers: 60,
        online: false,
        ip: SERVER_IP,
        port: SERVER_PORT,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      }
    );
  }
};
