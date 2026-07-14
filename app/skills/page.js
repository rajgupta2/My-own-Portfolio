"use client";
import { Bounce, Fade } from 'react-awesome-reveal';
import skillsList from "./skillsList.js";
import styles from './skills.module.css';
import Router from 'react-router';
import { useState } from 'react';

function MapSkills() {
    return (
        skillsList.map((item, index) => (
            <div key={index} className={"col-12 col-md-2 col-lg-2 border shadow " + styles.skill_item}>
                <span className='switching-color h1'>{item.icon} </span><br />
                <span className="text-success btn">{item.spanText}</span>
            </div>
        )));
}

export default function Skills() {
    return (
        <div className='mb-5'>
            <div className='row'>
                <h1 className="switching-color"> Technical Skills </h1>
            </div>
            <div className="row">
                <MapSkills/>
            </div>
        </div>
    )
}


