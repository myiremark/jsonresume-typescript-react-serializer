import React from 'react';
import {Resume,Profile,ResumeJsonLocation} from '../interfaces/resumejson';

const profileIcons = new Map<string,string>();

profileIcons.set("SoundCloud", "fa-soundcloud");
profileIcons.set("Twitter", "fa-twitter");
profileIcons.set("url","fa-globe");
profileIcons.set("LinkedIn","fa-linkedin");


const Profiles = (profiles: Profile[] ) => (
  
   profiles.map((profile:Profile) =>(
  <div className="contact-item">
    <div className="icon pull-left text-center">
      <span className={"fa fa-fw " +profileIcons.get(profile.network)}></span>
    </div>
    <div className="title pull-right">{profile.network}</div>
    <div className="description pull-right">
      <a href={profile.url} target="_blank" rel="noopener noreferrer">
        {profile.url}
      </a>
    </div>
  </div>
  ))
)

const Phone = (phone:string) => {
  return (
  <div className="contact-item">
    <div className="icon pull-left text-center">
      <span className="fa fa-phone fa-fw"></span>
    </div>
    <div className="title only pull-right">{phone}</div>
  </div>
  )
}

const Location = (location: ResumeJsonLocation) => {
  return (
    <div className="contact-item">
      <div className="icon pull-left text-center">
        <span className="fa fa-map-marker fa-fw"></span>
      </div>
      <div className="title pull-right">{location.address}</div>
      <div className="title pull-right">
        {location.city && location.city.length > 0 ? (location.city+ ","):null} {location.region} {location.postalCode} {location.countryCode}
      </div>
    </div>
  )
}

const Email = (email:string) => {
  return (
  <div className="contact-item">
  <div className="icon pull-left text-center">
    <span className="fa fa-envelope fa-fw"></span>
  </div>
  <div className="title only pull-right">
    <a href={"mailto:" + email} target="_blank" rel="noopener noreferrer">
      {email}
    </a>
  </div>
</div>
  )
}

const ShouldRenderlocation = (resume:Resume)=>{
  // try to render if any part of the location is filled in

  const loc = resume.basics.location;
  
  return resume.basics.location &&
    (
      (loc.address && loc.address.length > 0) ||
      (loc.city && loc.city.length > 0) ||
      (loc.region && loc.region.length > 0) ||
      (loc.postalCode && loc.postalCode.length) > 0 ||
      (loc.countryCode && loc.countryCode.length) > 0
    ) 
}

const BasicsUrl = (url:string) => {
  return (
    <div className="contact-item">
      <div className="icon pull-left text-center">
        <span className="fa fa-globe fa-fw"></span>
      </div>
      <div className="title only pull-right">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    </div>
  )
}

function Basics(resume: Resume) {
  const shouldRenderlocation = ShouldRenderlocation(resume);
 return (
  <div className="box clearfix">
    <h2>
      <i className="fa fa-bullseye ico"></i> Contact
    </h2>

    {shouldRenderlocation && Location(resume.basics.location)}

    {resume.basics.phone && resume.basics.phone.length>0 && Phone(resume.basics.phone)}
    {resume.basics.email && resume.basics.email.length>0 && Email(resume.basics.email)}
    {resume.basics.url && resume.basics.url.length>0 && BasicsUrl(resume.basics.url)}
    {resume.basics.profiles && resume.basics.profiles.length>0 && Profiles(resume.basics.profiles)}
  </div>
 )
}

export default Basics