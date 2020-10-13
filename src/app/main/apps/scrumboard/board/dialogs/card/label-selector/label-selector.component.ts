import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { ScrumboardService } from 'app/main/apps/scrumboard/scrumboard.service';
import { OverrideService } from '../../../../../../../../@override/utils/override.service';

@Component({
    selector: 'scrumboard-label-selector',
    templateUrl: './label-selector.component.html',
    styleUrls: ['./label-selector.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class ScrumboardLabelSelectorComponent implements OnInit, OnDestroy {
    @Input('card')
    card: any;

    @Output()
    cardLabelsChanged: EventEmitter<any>;

    board: any;
    labelsMenuView: string;
    selectedLabel: any;
    newLabel: any;
    toggleInArray: any;

    checkedValueChange
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    constructor(
        private _scrumboardService: ScrumboardService,
        public override: OverrideService
    ) {
        // Set the defaults
        this.cardLabelsChanged = new EventEmitter();
        this.labelsMenuView = 'labels';
        this.newLabel = {
            id: '',
            name: '',
            color: 'blue-400'
        };
        this.toggleInArray = FuseUtils.toggleInArray;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    getChecked(card, labelId) {
        return card.selectedLabels.find(item => item.id === labelId)
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._scrumboardService.onBoardChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(board => {
                this.board = board;
            });

            // console.log(' this.board ',  this.board )
            // console.log(' this.card ',  this.card )
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    public changeValueChecked(value) {
        this.checkedValueChange = value;
        console.log('checkedValueChange', this.checkedValueChange)
    }
    /**
     * Card labels changed
     */
    onCardLabelsChanged(): void {
        this.cardLabelsChanged.next();
    }

    /**
     * On label change
     */
    onLabelChange(): void {

        this._scrumboardService.updateBoard();
    }

    /**
     * Add new label
     */
    addNewLabel(): void {
        this.newLabel.id = FuseUtils.generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    }

    changeLabel(label, card) {
        // console.log('lable', label, 'card', card)
        if (!card.labels.find(l => l.id === label.id))
            card.labels.push(label)
    }
    getCheckged(label) {
        return this.card.labels.find(l => l.id === label.id)
    }
}
