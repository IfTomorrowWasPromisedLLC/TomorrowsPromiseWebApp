import React, { Component } from "react";

export default class AuthData {
  //Fields
  username = '';
  attributes = {
    sub: "",
    birthdate: "",
    email: "",
    family_name: "",
    gender: "",
    given_name: "",
    local: "",
    middle_name: "",
    name: "",
    nickname: "",
    phone_number: "",
    preffered_username: "",
    zone_info: "",
    updated_at: "",
    website: "",
  };

  constructor(
    username: string,
    email: string,
    sub: string,
    //optional params
    birthdate?: string,
    family_name?: string,
    gender?: string,
    given_name?: string,
    local?: string,
    middle_name?: string,
    name?: string,
    nickname?: string,
    phone_number?: string,
    preffered_username?: string,
    zone_info?: string,
    updated_at?: string,
    website?: string
  ) {
    this.username = username;
    this.attributes.email = email;
    this.attributes.sub = sub;
    //optional params
    birthdate
      ? (this.attributes.birthdate = birthdate)
      : (this.attributes.birthdate = "");
    family_name
      ? (this.attributes.family_name = family_name)
      : (this.attributes.family_name = "");
    gender ? (this.attributes.gender = gender) : (this.attributes.gender = "");
    given_name
      ? (this.attributes.given_name = given_name)
      : (this.attributes.given_name = "");
    local ? (this.attributes.local = local) : (this.attributes.local = "");
    middle_name
      ? (this.attributes.middle_name = middle_name)
      : (this.attributes.middle_name = "");
    name ? (this.attributes.name = name) : (this.attributes.name = "");
    nickname
      ? (this.attributes.nickname = nickname)
      : (this.attributes.nickname = "");
    phone_number
      ? (this.attributes.phone_number = phone_number)
      : (this.attributes.phone_number = "");
    preffered_username
      ? (this.attributes.preffered_username = preffered_username)
      : (this.attributes.preffered_username = "");
    zone_info
      ? (this.attributes.zone_info = zone_info)
      : (this.attributes.zone_info = "");
    updated_at
      ? (this.attributes.updated_at = updated_at)
      : (this.attributes.updated_at = "");
    website
      ? (this.attributes.website = website)
      : (this.attributes.website = "");
  }
}
