import request from '../utils/request';

export function getCinemaList() {
  return request('https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=3906475',{
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16557137301713292519145473"}',
        'X-Host': 'mall.film-ticket.cinema.list'
    }
  });
}
