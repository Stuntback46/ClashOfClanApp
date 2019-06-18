import * as Cst from '../Constants/Constants.js'

export const GoldLoot = function(dTownHall,stoGold=0,tGold=0){
	let stoGoldLoot
	let tGoldLoot
	if(stoGold>=Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		stoGoldLoot=Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		stoGoldLoot=stoGold*Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][0]
	}
	if(tGold>=Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		tGoldLoot=Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		tGoldLoot=tGold*Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][0]
	}	
	let goldLoot = [];
	for (let i = 0;i+dTownHall<=12; i++) {
		goldLoot[i]=Math.round(((stoGoldLoot)*Cst.LootMultiplier[i])+tGoldLoot);
	}
	return(goldLoot);

}

export const ElixirLoot = function(dTownHall,stoElixir=0,tElixir=0){
	let stoElixirLoot
	let tElixirLoot
	if(stoElixir>=Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		stoElixirLoot=Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		stoElixirLoot=stoElixir*Cst.StoragePercentLootablebyTownHallLevel[dTownHall-1][0]
	}
	if(tElixir>=Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		tElixirLoot=Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		tElixirLoot=tElixir*Cst.TreasuryPercentLootablebyTownHallLevel[dTownHall-1][0]
	}	
	let ElixirLoot = [];
	for (let i = 0;i+dTownHall<=12; i++) {
		ElixirLoot[i]=Math.round(((stoElixirLoot)*Cst.LootMultiplier[i])+tElixirLoot);
	}

	return(ElixirLoot);

}


export const DarkElixirLoot = function(dTownHall,stoDarkElixir=0,tDarkElixir=0){
	let stoDarkElixirLoot
	let tDarkElixirLoot
	if(stoDarkElixir>=Cst.StorageDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		stoDarkElixirLoot=Cst.StorageDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		stoDarkElixirLoot=stoDarkElixir*Cst.StorageDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][0]
	}
	if(tDarkElixir>=Cst.TreasuryDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][2])
	{
		tDarkElixirLoot=Cst.TreasuryDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][1];
	}
	else {

		tDarkElixirLoot=tDarkElixir*Cst.TreasuryDarkElixirPercentLootablebyTownHallLevel[dTownHall-1][0]
	}	
	let DarkElixirLoot = [];
	for (let i = 0;i+dTownHall<=12; i++) {
		DarkElixirLoot[i]=Math.round((stoDarkElixirLoot*Cst.LootMultiplier[i])+tDarkElixirLoot);
	}
	return(DarkElixirLoot);

}