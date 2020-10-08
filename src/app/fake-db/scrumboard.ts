export class ScrumboardFakeDb
{
    public static boards = [
        {
            'id'      : '1',
            'name'    : 'Applications',
            'uri'     : 'user-applications',
            'settings': {
                'color'          : 'fuse-dark',
                'subscribed'     : false,
                'cardCoverImages': false
            },
            'lists'   : [
                {
                    'id'     : '56027cf5a2ca3839a5d36103',
                    'name'   : 'New',
                    'idCards': [
                    ]
                },
                {
                    'id'     : '56127cf2a2ca3539g7d36103',
                    'name'   : 'Closed',
                    'idCards': [
                        '2837273da9b93dd84243s0f9',
                    
                    ]
                },
              
            ],
            'cards'   : [
                {
                    'id'               : '2837273da9b93dd84243s0f9',
                    'name'             : 'Update generators',
                    'description'      : 'Current generator doesn\'t support Node.js 6 and above.',
                    'idAttachmentCover': '',
                    'idMembers'        : [],
                    'idLabels'         : [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments'      : [],
                    'subscribed'       : false,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'AngularCLI could be a nice alternative.',
                            'time'    : 'now'
                        }
                    ],
                    'activities'       : [],
                    'due'              : null
                }
            
            ],
            'members' : [
               
                {
                    'id'    : '36027j1930450d8bf7b10158',
                    'name'  : 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels'  : [
                {
                    'id'   : '26022e4129ad3a5sc28b36cd',
                    'name' : 'High Priority',
                    'color': 'red-500'
                },
              
            ]
        }
    ];
}
