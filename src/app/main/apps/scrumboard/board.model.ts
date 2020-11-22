import { FuseUtils } from '@fuse/utils';

import { List } from './list.model';
import { Card } from './card.model';

const sampleLabels = [
    {
        id   : FuseUtils.generateGUID(),
        name : 'Important',
        color: 'red-500'
    },
    {
        id   : FuseUtils.generateGUID(),
        name : 'Regular',
        color: 'blue-500'
    },
    {
        id   : FuseUtils.generateGUID(),
        name : 'Closed',
        color: 'green-400'
    }
];

const sampleMembers = [
   
];

export class Board
{
    name: string;
    uri: string;
    id: string;
    settings: {
        color: string,
        subscribed: boolean,
        cardCoverImages: boolean
    };
    lists: List[];
    cards: Card[];
    members: {
        id: string,
        name: string,
        avatar: string
    }[];
    labels: {
        id: string,
        name: string,
        color: string
    }[];

    /**
     * Constructor
     *
     * @param board
     */
    constructor(board)
    {
        this.name = board.name || 'new Board';
        this.uri = board.uri || 'new-board';
        this.id = board.id || FuseUtils.generateGUID();
        this.settings = board.settings || {
            color          : '',
            subscribed     : true,
            cardCoverImages: true
        };
        this.lists = [];
        this.cards = [];
        this.members = board.members || sampleMembers;
        this.labels = board.labels || sampleLabels;
    }
}
