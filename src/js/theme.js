import React from "react"

export const themes={
    light:{
        navbarTheme : 'navbar navbar-expand-lg navbar-light bg-light sticky',
        bodyBackground : 'white',
        navColor : 'black',
        toggleSwitch : 'check light',
        cardBody : '',
        cardShadow : '0px 0px 5px grey, -1px -1px 2px grey, -1px -1px 4px grey, -1px -1px 8px grey, -1px -1px 16px grey',
        modalBg : 'white'
    },
    dark:{
        navbarTheme : 'navbar navbar-expand-lg navbar-dark bg-dark sticky',
        bodyBackground : '#343a40',
        navColor : 'rgba(255,255,255,0.55)',
        toggleSwitch : 'check dark',
        cardBody: 'darkgrey',
        cardShadow : '0px 0px 5px black, -1px -1px 2px black, -1px -1px 4px black, -1px -1px 8px black, -1px -1px 16px black',
        modalBg : 'darkgrey'
    }
}

export const themeContext = React.createContext(themes.light)