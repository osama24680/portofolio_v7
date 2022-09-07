import React from 'react'
import { NavigationDots, SocialMedia } from "../Components"

const AppWarp = (Component, idName, classNames) => function HOC() {
    let isDark=true
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia isDark={isDark}/>
            <div className="app__wrapper app__flex">
                <Component isDark={isDark}/>

            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWarp