import { FuseUtils } from '@fuse/utils';

export class Card {
    id: string;
    name: string;

    description: string;
    idAttachmentCover: string;
    idMembers: string[];
    idLabels: string[];
    attachments: any[];
    subscribed: boolean;
    checklists: any[];
    checkItems: number;
    checkItemsChecked: number;
    comments: any[];
    activities: any[];
    due: string;
    email: string;
    firstName: string;
    lastName: string;
    mobile: string;
    /**
     * Constructor
     *
     * @param card
     */
    constructor(card) {
        let due = new Date();
        due.setDate(due.getDate() + 7)
        this.id = card.id || FuseUtils.generateGUID();
        this.name = card.name || card.firstName + " " + card.lastName || '';
        this.email = card.email || '';
        this.firstName = card.firstName || '';
        this.lastName = card.lastName || '';
        this.mobile = card.mobile || '';
        this.description = card.description || '';
        this.idAttachmentCover = card.idAttachmentCover || '';
        this.idMembers = card.idMembers || [];
        this.idLabels = card.idLabels || [];
        this.attachments = card.attachments || [];
        this.subscribed = card.subscribed || true;
        this.checklists = card.checklists || [];
        this.checkItems = card.checkItems || 0;
        this.checkItemsChecked = card.checkItemsChecked || 0;
        this.comments = card.comments || [];
        this.activities = card.activities || [];
        this.due = card.due || due;
    }
}
