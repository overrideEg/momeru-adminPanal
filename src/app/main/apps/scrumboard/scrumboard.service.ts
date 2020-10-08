import { DoCheck, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { EntityService } from '../../../../@override/utils/entity.service';
import { API_URLS } from '../../../../assets/constants/API_URLS';

@Injectable()
export class ScrumboardService implements Resolve<any>, OnDestroy {
    boards: any[] = [
        {
            id: '1',
            name: 'Applications',
            uri: 'user-applications',
            settings: {
                'color': 'fuse-dark',
                'subscribed': true,
                'cardCoverImages': true
            },
            lists: [
                {
                    id: 'new',
                    name: 'New',
                    idCards: [
                    ]
                },
                {
                    id: 'onProgess',
                    name: 'On Progress',
                    idCards: [

                    ]
                }, {
                    id: 'review',
                    name: 'Review',
                    idCards: [

                    ]
                }, {
                    id: 'todo',
                    name: 'TODO',
                    idCards: [

                    
                    ]
                },

                
                {
                    id: 'closed',
                    name: 'Closed',
                    idCards: [

                    ]
                },

            ],
            cards: [
                // {
                //     id: '2837273da9b93dd84243s0f9',
                //     name: 'Update generators',
                //     'description': 'Current generator doesn\'t support Node.js 6 and above.',
                //     'idAttachmentCover': '',
                //     'idMembers': [],
                //     'idLabels': [

                //     ],
                //     'attachments': [],
                //     'subscribed': false,
                //     'checklists': [],
                //     'checkItems': 0,
                //     'checkItemsChecked': 0,
                //     'comments': [
                //         // {
                //         //     'idMember': '36027j1930450d8bf7b10158',
                //         //     'message': 'AngularCLI could be a nice alternative.',
                //         //     'time': 'now'
                //         // }
                //     ],
                //     'activities': [],
                //     'due': null
                // }

            ],
            members: [],
            labels: [

            ]
        }
    ];
    routeParams: any;
    board: any;


    onBoardsChanged: BehaviorSubject<any>;
    onBoardChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _entity: EntityService
    ) {
        // Set the defaults
        this.onBoardsChanged = new BehaviorSubject([]);
        this.onBoardChanged = new BehaviorSubject([]);
    }
    ngOnDestroy(): void {
        this.boards[0].cards = []
        this.boards = this.boards[0]
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getBoards()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }
    i = 1

    /**
     * Get boards
     *
     * @returns {Promise<any>}
     */
    async getBoards(): Promise<any> {



        return new Promise(async (resolve, reject) => {

            await this.getData()
            this.onBoardsChanged.next(this.boards);
            resolve(this.boards);


        });
    }

    async getData() {
        this.boards[0].labels = await this._entity.getAll(API_URLS.Label.get);
        this.boards[0].members = await this._entity.getAll(API_URLS.User.employees);
        this.boards[0].members.forEach(member => { member['avatar'] = '../../../../../../../assets/images/logos/logo.png' });
        this.board = this.boards[0];
        this.board.cards = await this._entity.getData(API_URLS.UserForm.get) as Array<any>;
        this.board.cards.forEach(card => {
            let list
            if (card.status === 'new') {
                list = this.boards[0].lists.find(list => list.id === 'new');
            }
            if (card.status === 'closed') {
                list = this.boards[0].lists.find(list => list.id === 'closed')
            }
            if (card.status === 'onProgess') {
                list = this.boards[0].lists.find(list => list.id === 'onProgess')
            }
            if (card.status === 'review') {
                list = this.boards[0].lists.find(list => list.id === 'review')
            }
            if (card.status === 'todo') {
                list = this.boards[0].lists.find(list => list.id === 'todo')
            }
            list['idCards'].push(card.id)


            card['idLabels'] = []
            card.labels.forEach(element => {
                card['idLabels'] = element.id
            });

            if (card.assignedTo)
                card['assignedTo']['avatar'] = '../../../../../../assets/images/logos/logo.png';

            card.comments.forEach(comment => {
                comment['idMember'] = comment.user.id;

            });
            card['idMembers'] = [card.assignedTo?.id];
            card['name'] = card.user?.name;
            let date = card.valueDate;
            card['description'] = date.toLocaleString();
        })

        this.i++;
    }
    /**
     * Get board
     *
     * @param boardId
     * @returns {Promise<any>}
     */
    getBoard(boardId): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await this.getData()

            this.board = this.boards.find(b => b.id === boardId);
            this.onBoardChanged.next(this.board);
            resolve(this.board);

        });
    }

    /**
     * Add card
     *
     * @param listId
     * @param newCard
     * @returns {Promise<any>}
     */
    addCard(listId, newCard): Promise<any> {
        this.board.lists.map((list) => {
            if (list.id === listId) {
                return list.idCards.push(newCard.id);
            }
        });

        this.board.cards.push(newCard);

        return this.updateBoard();
    }

    /**
     * Add list
     *
     * @param newList
     * @returns {Promise<any>}
     */
    addList(newList): Promise<any> {
        this.board.lists.push(newList);

        return this.updateBoard();
    }

    /**
     * Remove list
     *
     * @param listId
     * @returns {Promise<any>}
     */
    removeList(listId): Promise<any> {
        const list = this.board.lists.find((_list) => {
            return _list.id === listId;
        });

        for (const cardId of list.idCards) {
            this.removeCard(cardId);
        }

        const index = this.board.lists.indexOf(list);

        this.board.lists.splice(index, 1);

        return this.updateBoard();
    }

    /**
     * Remove card
     *
     * @param cardId
     * @param listId
     */
    removeCard(cardId, listId?): void {
        const card = this.board.cards.find((_card) => {
            return _card.id === cardId;
        });

        if (listId) {
            const list = this.board.lists.find((_list) => {
                return listId === _list.id;
            });
            list.idCards.splice(list.idCards.indexOf(cardId), 1);
        }

        this.board.cards.splice(this.board.cards.indexOf(card), 1);

        this.updateBoard();
    }

    /**
     * Update board
     *
     * @returns {Promise<any>}
     */
    updateBoard(): Promise<any> {

        return new Promise(async (resolve, reject) => {
            this.board = this.boards[0];

            let updated = await this._entity.updateArray(API_URLS.UserForm.put, this.board.cards)
            this.boards[0].cards = updated.body;
            this.onBoardChanged.next(this.board);
            resolve(this.board);
            // this._httpClient.post('api/scrumboard-boards/' + this.board.id, this.board)
            //     .subscribe(response => {
            //     }, reject);
        });
    }

    /**
     * Update card
     *
     * @param newCard
     */
    updateCard(newCard): void {
        this.board.cards.map((_card) => {
            if (_card.id === newCard.id) {
                return newCard;
            }
        });

        this.updateBoard();
    }

    /**
     * Create new board
     *
     * @param board
     * @returns {Promise<any>}
     */
    createNewBoard(board): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/scrumboard-boards/' + board.id, board)
                .subscribe(response => {
                    resolve(board);
                }, reject);
        });
    }
}

@Injectable()
export class BoardResolve implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {ScrumboardService} _scrumboardService
     */
    constructor(
        private _scrumboardService: ScrumboardService
    ) {
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @returns {Promise<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        return this._scrumboardService.getBoard(route.paramMap.get('boardId'));
    }
}
