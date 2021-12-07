import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija', AwayTeam:'Persipon',HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:2,PlayingDate:new Date(2021,8,12),HomeTeam:'RRQ', AwayTeam:'Persebaya',HomeScore:3,AwayScore:2,
    RefName:'Budi',Notes:'Overtime'},
    {id:3,PlayingDate:new Date(2021,8,12),HomeTeam:'Bali United', AwayTeam:'Evos',HomeScore:3,AwayScore:2,
    RefName:'Anto',Notes:'Overtime'},
    {id:4,PlayingDate:new Date(2021,8,12),HomeTeam:'Black Internasional', AwayTeam:'RRQ',HomeScore:3,AwayScore:2,
    RefName:'Roni',Notes:'Overtime'},
    {id:5,PlayingDate:new Date(2021,8,13),HomeTeam:'White International', AwayTeam:'Navi',HomeScore:3,AwayScore:2,
    RefName:'Jack',Notes:'Overtime'},
]
export const Teams:Team[]=[
    {id:1,name:'Persija',type:'Klub Lokal'},
    {id:2,name:'Persipon',type:'Klub Lokal'},
    {id:3,name:'Bali United',type:'Klub Lokal'},
    {id:4,name:'Evos',type:'Klub Internasional'},
    {id:5,name:'RRQ',type:'Klub Internasional'},
    {id:6,name:'Todak',type:'Klub Lokal'},
    {id:7,name:'Navi',type:'Klub Lokal'},
]