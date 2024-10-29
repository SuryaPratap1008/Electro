import React from 'react'
import Icon from './Icon'
import '../css/micon.css'


export default function Micon_cont() {
  return (
    <div  id="micon-cont" className="dimmed">
      <Icon icon = {require('../images/New folder/phone-w.png')} merchn = "PHONES"></Icon>
      <Icon icon = {require('../images/New folder/hp-w.png')} merchn = "HEADPHONES"></Icon>
      <Icon icon = {require('../images/New folder/tv-w.png')} merchn = "TELEVISION"></Icon>
      <Icon icon = {require('../images/New folder/ac-w.png')} merchn = "AC"></Icon>
      <Icon icon = {require('../images/New folder/wm-w.png')} merchn = "APPLIANCES"></Icon>

      <Icon icon = {require('../images/New folder/speaker-w.png')} merchn = "AUDIO"></Icon>
      <Icon icon = {require('../images/New folder/speaker-w.png')} merchn = "AUDIO"></Icon>
    </div>
  )
}
