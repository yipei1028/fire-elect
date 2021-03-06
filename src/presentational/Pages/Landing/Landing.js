import React from 'react';
import logo from './logo.svg';
import './landing.css';
import ActionBloc from '../../Components/ActionBloc/ActionBloc';
import Grid from '@material-ui/core/Grid';


export default function Landing() {
    return(
    <div className="App">
        <header className="App-header">
         <Grid container spacing={0} justify="center">
            <Grid item xs={12} sm={7}>
                <img src={logo} className="App-logo" alt="logo" />
                <ActionBloc title={"AI戰情室"} subtitle={"人工智慧跟鄉民智慧，一起實況預測開票"} desc={"預計 2020.01.11 17:00 (GMT+8) 開放"} button={"進入戰情室"} buttontype={"disabled"}/>                   
            </Grid>
            <Grid container xs={12} sm={4} spacing={0} justify="center" direction="column" alignItems="center" >
                <ActionBloc title={"我大膽預測"} subtitle={"大衛在潛水艇中一直請求藍仙女，直到大衛身體的能源用完，海水也被冰凍起來。"} desc={"預計 2020.01.05 17:00 (GMT+8) 開放"} button={"我要預測"} buttontype={"default"}/>             
                <ActionBloc title={"庶民ㄟ心聲"} subtitle={"時間經過了2000年，人類已經滅亡，地球被厚實的冰層覆蓋，成為一片荒蕪的冰冷世界。"} desc={"預計 2020.01.05 17:00 (GMT+8) 開放"} button={"猜猜庶民的心聲"} buttontype={"default"}/>
            </Grid>
            </Grid>
        </header>
    </div>
    );
}