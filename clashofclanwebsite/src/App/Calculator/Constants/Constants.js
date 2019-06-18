import th1 from '../Image/th1.png';
import th2 from '../Image/th2.png';
import th3 from '../Image/th3.png';
import th4 from '../Image/th4.png';
import th5 from '../Image/th5.png';
import th6 from '../Image/th6.png';
import th7 from '../Image/th7.png';
import th8 from '../Image/th8.png';
import th9 from '../Image/th9.png';
import th10 from '../Image/th10.png';
import th11 from '../Image/th11.png';
import th12 from '../Image/th12.png';

export const TownHallLvlMax = 12;
export const MaxGoldStorage = 12000000;
export const MaxElixirStorage = 12000000;
export const MaxDarkElixirStorage = 240000;
export const MaxGoldTreasury=3100000;
export const MaxElixirTreasury=3100000;
export const MaxDarkElixirTreasury=18000;
//[Available to be Stolen,Cap,Storage Amount to Reach Cap]}
export const StoragePercentLootablebyTownHallLevel = [
[0.2,500,2500],
[0.2,1400,7000],
[0.2,20000,10000],
[0.2,100000,500000],
[0.2,200000,1000000],
[0.2,200000,1000000],
[0.18,250000,1388889],
[0.16,300000,1875000],
[0.14,350000,2500000],
[0.12,400000,3333333],
[0.1,450000,4500000],
[0.1,450000,4500000]
];

export const TreasuryPercentLootablebyTownHallLevel = [
[0,0,0],
[0,0,0],
[0.03,12000,400000],
[0.03,18000,600000],
[0.03,24000,800000],
[0.03,36000,1200000],
[0.03,48000,1600000],
[0.03,60000,2000000],
[0.03,72000,2400000],
[0.03,84000,2800000],
[0.03,93000,3100000],
[0.03,93000,3100000]
];


export const TreasuryDarkElixirPercentLootablebyTownHallLevel = [
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0.03,240,8000],
[0.03,300,10000],
[0.03,360,12000],
[0.03,420,14000],
[0.03,480,16000],
[0.03,540,18000]
];

export const StorageDarkElixirPercentLootablebyTownHallLevel = [

[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0],
[0.06,1200,8000],
[0.06,2000,10000],
[0.05,2500,12000],
[0.04,3000,14000],
[0.04,3500,16000],
[0.04,3500,18000]
];
export const LootMultiplier = [1,0.8,0.5,0.25,0.05];


export const TownHallPicture=[th1,th2,th3,th4,th5,th6,th7,th8,th9,th10,th11,th12];