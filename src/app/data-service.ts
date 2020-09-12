import { Injectable } from '@angular/core';

import { Internationalization } from '@syncfusion/ej2-base';
import {
    AccumulationChart, AccumulationLegend, PieSeries, AccumulationTooltip,
    AccumulationDataLabel, SeriesModel, Chart, LineSeries, DateTime, Legend, Tooltip, IAccLoadedEventArgs, AccumulationTheme, IAccPointRenderEventArgs,
    StackingColumnSeries, Crosshair, DataLabel, ColumnSeries, IMouseEventArgs, Series
} from '@syncfusion/ej2-charts';
import { Grid, DetailRow } from '@syncfusion/ej2-grids';

import { DashboardComponent } from './home/dashboard/dashboard.component';

@Injectable()

export class DataService {
    constructor() {
        this.initialize();
    }

    public emi: number = 0;
    public princ: number = 0;
    public tent: number = 12;
    public principalValue: number = 50;
    public goldRate: number = 52;
    public interestValue: number = 8.5;
    public loanValue: number = 1;
    public dateValue: Date = new Date();
    public yearWiseData: Object[] = [];
    public emiAmt: string = '';
    public principalAmt: string = '';
    public interestAmt: string = '';
    public totalAmt: string = '';
    public dashboard: DashboardComponent;

    public yearTenure: boolean = true;
    public totalPrincipalYear: number = 0;
    public totalInterestYear: number = 0;
    public inter: number;
    public dataUnits: [Object] = <[Object]>[];
    public dateObj: Date = new Date();
    public totalInterest: number = 0;
    public totalAmount: number = 0;
    public totalPrincipal: number = 0;
    public endBalance: number;
    public beginBalance: number;
    public yearTotal: number = 0;
    public intl: Internationalization = new Internationalization();


    public refreshUI1(): void {
        this.setInitValues();
        let interestPercent: number = parseFloat((Math.round(this.princ - (this.emi * this.tent)) / Math.round((this.emi * this.tent)) * 100).toFixed(2));
        this.dashboard.pieChart.series = [
            {
                dataSource: [
                    {
                        'x': 'Principal Amount',
                        y: this.princ * this.goldRate,
                        text: parseFloat(((this.princ * this.goldRate) / Math.round((this.emi * this.tent)) * 100).toFixed(2)) + '%'
                    },
                    {
                        'x': 'Interest Amount',
                        y: (this.tent ? Math.round(this.princ - (this.emi * this.tent)) : 0),
                        text: interestPercent ? interestPercent + '%' : ' '
                    }
                ],
                radius: '80%', xName: 'x',
                animation: { enable: true },
                yName: 'y',
                startAngle: 290,
                endAngle: 290, innerRadius: '60%',
                explode: true, explodeOffset: '10%', explodeIndex: 3
            }
        ];
        this.dashboard.pieChart.refresh();
        this.updateTotalAmt();
    }

    public refreshUI(): void {
        this.refreshUI1();
        this.renderControls();
       // this.chart.chartObj.refresh();
    }

    public updateTotalAmt(): void {        
        this.dashboard.emiAmt = this.emiAmt;
        this.dashboard.interestAmt = this.interestAmt;
        this.dashboard.totalAmt = this.totalAmt;
        this.dashboard.principalAmt = this.principalAmt.toString();
        this.dashboard.principalValue = this.principalValue.toString();
    }

    public renderControls(): void {
    }

    public getInterest(): number {
        return this.interestValue ? parseFloat('' + this.interestValue / 12 / 100) : 0;
    }

    public calculateEMI(): number {
        let interestValue: number = this.getInterest();
        let tent: number = this.yearTenure ? 12 : 6;
        if (interestValue) {
            return this.principalValue * interestValue *
                (Math.pow((1 + interestValue), tent)) / ((Math.pow((1 + interestValue), tent)) - 1);

        }
        return this.principalValue / tent;
    }

    public setInitValues(): void {
        this.emi = this.calculateEMI();
        this.princ = this.principalValue * this.goldRate;
        this.tent = this.yearTenure ? 12 : 6;
        this.dateObj = new Date(this.dateValue.getTime());
        this.totalInterest = 0;
        this.totalAmount = 0;
        this.totalPrincipal = 0;
        this.totalPrincipalYear = 0;
        this.totalInterestYear = 0;
        this.emiAmt = (this.tent ? Math.round(this.emi) : 0).toString();
        this.interestAmt = (this.tent ? Math.round((this.emi * this.tent)) : 0).toString();
        this.totalAmt = (this.tent ? Math.round( this.tent ? this.princ - Math.round((this.emi * this.tent)) : 0) : 0).toString();
        this.principalAmt = this.princ.toString();
    }



    public initialize(): void {
        this.setInitValues();
    }

}
