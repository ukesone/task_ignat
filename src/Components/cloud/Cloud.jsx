import React from 'react';
import s from './Cloud.module.css';

var a, b;
var SD = [a, b] = [1, 2];
console.log("A is " + a + " B is " + b + SD);
const time=new Date();
const data= time.getFullYear()+"г "+time.getDate()+"д "+time.getHours()+"ч "+ time.getMinutes()+"м "
;

function Cloud() {
    return (

            <div className={s.body}>

                <div className={s.avatar}>
                </div>
                <div className={s.cloud}>
                    <div className={s.container}>
                        <div className={s.item}><span contentEditable="">DEVELOPMENT CORPORATION FRONT-END</span></div>
                        <div className={s.item}>Welcome to the first lesson from Ignat.</div>
                        <div className={s.item}><p>01:10</p></div>
                    </div>
                </div>
            </div>


    );
}

export default Cloud;
