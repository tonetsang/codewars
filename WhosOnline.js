const whosOnline = (friends) => {
  let online = []
  let offline = []
  let away = []
  friends.map(x => x.status == 'online' && x.lastActivity <= 10 ? 
    online.push(x.username) : x.status == 'offline' ? 
    offline.push(x.username) : away.push(x.username))
  if(online.length > 0 && offline.length > 0 && away.length > 0) return {online, offline, away}
  if(online.length > 0 && away.length > 0) return {online, away}
  if(online.length > 0 && offline.length > 0) return {online, offline}
  if(offline.length > 0 && away.length > 0) return {offline, away}
  return {}
}