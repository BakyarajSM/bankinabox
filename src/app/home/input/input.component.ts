import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import { DataService } from '../../data-service';

@Component({
  selector: 'input-section',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None
})

export class InputComponent implements OnInit {

    /** Configurations for the Input page */
    constructor(private data: DataService) {
        this.principalValue = this.data.principalValue;
        this.interestValue = this.data.interestValue;
        this.loanValue = this.data.loanValue;
    }

    // The GoldWeight NumericTextBox binding properties
    public principalNumMinValue: number = 1;
    public principalNumMaxValue: number = 1000;
    public principalNumStep: number = 10;
    public principalNumFormat: string = '';
    public principalNumWidth: string = '165px';

    public principalNumChange(args: ChangeEventArgs): void {
        this.data.principalValue = this.principalValue;
        if (args.isInteraction) {
            this.data.refreshUI();
        }
    }

    // The interest NumericTextBox binding properties
    public interestNumMinValue: number = 0;
    public interestNumMaxValue: number = 20;
    public interestNumStep: number = .25;
    public interestNumFormat: string = '#.##\' %\'';
    public interestNumWidth: string = '165px';

    public interestNumChange(args: ChangeEventArgs): void {
        this.data.interestValue = this.interestValue;
        if (args.isInteraction) {
            this.data.refreshUI();
        }
    }

    // The loan NumericTextBox binding properties
    public loanNumMinValue: number = 1;
    public loanNumMaxValue: number = 40;
    public loanNumStep: number = 1;
    public loanNumFormat: string = '#.##';
    public loanNumWidth: string = '150px';

    public loanNumChange(args: ChangeEventArgs): void {
        this.data.loanValue = this.loanValue;
        if (args.isInteraction) {
            this.data.refreshUI();
        }
    }

    // The principal Slider binding properties
    public principalValue: number = 0;
    public principalMinValue: number = 0;
    public principalMaxValue: number = 100;
    public principalStep: number = 10;
    public principalType: string = 'MinRange';
    public principalTicks: Object = { placement: 'After', largeStep: 10, smallStep: 1, showSmallTicks: false, format: 'c0' };

    public principalChange(args: ChangeEventArgs): void {
        this.data.principalValue = this.principalValue;
        this.data.setInitValues();
        this.data.updateTotalAmt();
    }

    public principalChanged(args: ChangeEventArgs): void {
        this.data.refreshUI();
    }

    // The interest Slider binding properties
    public interestValue: number = 0;
    public interestMinValue: number = 7;
    public interestMaxValue: number = 20;
    public interestStep: number = .25;
    public interestType: string = 'MinRange';

    public interestChange(args: ChangeEventArgs): void {
        this.data.interestValue = this.interestValue;
        this.data.setInitValues();
        this.data.updateTotalAmt();
    }

    public interestChanged(args: ChangeEventArgs): void {
        this.data.refreshUI();
    }

    // The loan Slider binding properties
    public loanValue: number = 0;
    public loanMinValue: number = 0;
    public loanMaxValue: number = 40;
    public loanStep: number = 1;
    public loanType: string = 'MinRange';

    public loanChange(args: ChangeEventArgs): void {
        this.data.loanValue = this.loanValue;
        this.data.setInitValues();
        this.data.updateTotalAmt();
    }

    public loanChanged(args: ChangeEventArgs): void {
        this.data.refreshUI();
    }

    // Radio button binding properties
    public yearTenure: boolean = this.data.yearTenure;

    public monthChanged(): void {
        this.data.yearTenure = this.yearTenure = false;
        this.loanNumStep = 6;
        this.loanValue = 1;
        this.loanStep = 12;
        this.interestValue = 9;
        this.data.refreshUI();
    }

    public yearChanged(): void {
        this.data.yearTenure = this.yearTenure = true;
        this.loanNumStep = 1;
        this.loanValue = 1;
        this.interestValue = 8.5;
        this.data.refreshUI();
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }
}
