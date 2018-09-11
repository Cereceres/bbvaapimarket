const assert = require('assert');


const bbva = require('./index');

const account = {
    customer: {
        firstName: 'PERSONA1',
        lastName: 'APPATERNO',
        surname: 'APMATERNO',
        gender: {
            id: 'MALE'
        },
        birthData: {
            country: {
                id: 'MEX'
            },
            state: {
                id: 'DF'
            },
            birthDate: '1979-12-24'
        },
        identityDocuments: [
            {
                documentType: {
                    id: 'CURP'
                },
                number: 'MKDN970821MDFZZK02'
            },
            {
                documentType: {
                    id: 'INE'
                },
                expirationDate: '2018-12-02',
                number: '1012345601'
            }
        ],
        nationalities: [
            {
                id: 'MEX'
            }
        ],
        addresses: [
            {
                streetName: 'ISSAC NEWTON 95 INTERIOR 1',
                state:{ id:'EM' },
                zipCode: '50075',
                neighborhood: 'Cientificos',
                municipality: 'Toluca de Lerdo',
                exteriorNumber: '95',
                interiorNumber: '1'
            }
        ],
        contactDetails: [
            {
                contact: '5543038111',
                phoneCompany: {
                    id: '01'
                },
                contactType: {
                    id: 'MOBILE_NUMBER'
                }
            },
            {
                contact: 'correoprueba1@dominio.com',
                contactType: {
                    id: 'EMAIL'
                }
            }
        ]
    }
};

const vehicle = {
    customer: {
        firstName: 'PERSONA1',
        lastName: 'APPATERNO',
        surname: 'APMATERNO',
        gender:{ id: 'M' },
        grade: {
            id: 'PROFESSIONAL'
        },
        civilStatus: {
            id: 'SINGLE'
        },
        birthData: {
            country: {
                id: 'MEX'
            },
            state: {
                id: 'EM'
            },
            birthDate: '1997-08-21'
        },
        isBBVACustomer: false,
        identityDocuments: [
            {
                documentType: {
                    id: 'CURP'
                },
                number: 'MKDN970821MDFZZK02'
            },
            {
                documentType: {
                    id: 'PROFESSIONAL_LICENSE'
                },
                number: '46953245569'
            },
            {
                documentType: {
                    id: 'RFC'
                },
                number: 'MKDN970821K02'
            }
        ],
        nationalities: [
            {
                id: 'MEX'
            }
        ],
        addresses: [
            {
                streetName: 'CALLE',
                state: { id: 'EM' },
                zipCode: '54020',
                neighborhood: 'COLONIA',
                municipality: 'TBAZ',
                city: 'TBAZ',
                exteriorNumber: '98',
                interiorNumber: '1'
            }
        ],
        residence: {
            ownershipStatus: {
                id: 'OWN'
            },
            residenceYears: '15'
        },
        contactDetails: [
            {
                regionalCode: '044',
                contact: '5543038111',
                phoneCompany: {
                    id: '01'
                },
                contactType: {
                    id: 'MOBILE_NUMBER'
                }
            },
            {
                regionalCode: '555',
                contact: '5543038111',
                contactType: {
                    id: 'PHONE_NUMBER'
                }
            },
            {
                contact: 'correoprueba1@dominio.com',
                contactType: {
                    id: 'EMAIL'
                }
            }
        ],
        economicData: {
            economicDependents: '2',
            economicActivity: {
                id: 'SALARIED'
            },
            occupationType: {
                id: 'MANAGER'
            },
            healthInstitution: 'IMSS',
            workPlaces: [
                {
                    status: 'CURRENT',
                    name: 'GFT',
                    businessActivity: 'MINERIA',
                    businessType: 'PRIVATE',
                    address: {
                        streetName: 'CALLE',
                        state:{ id:'EM' },
                        country:{ id:  'MEX' },
                        zipCode: '54020',
                        neighborhood: 'COLONIA',
                        municipality: 'TBAZ',
                        city: 'TBAZ',
                        exteriorNumber: '46',
                        interiorNumber: '5'
                    },
                    contactDetails: [
                        {
                            regionalCode: '555',
                            contact: '5543038111',
                            contactType: {
                                id: 'PHONE_NUMBER'
                            }
                        }
                    ],
                    seniority: '02-02'
                },
                {
                    status: 'PREVIOUS',
                    name: 'Softtek',
                    businessActivity: 'MINERIA',
                    businessType: 'PRIVATE',
                    contactDetails: [
                        {
                            regionalCode: '555',
                            contact: '5543038111',
                            contactType: {
                                id: 'PHONE_NUMBER'
                            }
                        }
                    ],
                    seniority: '02/02'
                }
            ],
            incomes: [
                {
                    incomesType: {
                        id: 'FIXED'
                    },
                    values: [
                        {
                            amount: '10000'
                        }
                    ]
                },
                {
                    incomesType: {
                        id: 'VARIABLES'
                    },
                    values: [
                        {
                            amount: '15000'
                        }
                    ]
                }
            ]
        },
        credit: {
            hasCreditCard: true,
            lastFourDigits: '1850',
            hasMortgageLoan: false,
            hasVehicleLoan: false
        },
        references: [
            {
                referenceType: 'PERSONAL',
                firstName: 'PERSONA2',
                lastName: 'APPATERNO',
                surnames: 'APMATERNO',
                contactDetails: [
                    {
                        regionalCode: '555',
                        contact: '5543038112',
                        contactType: {
                            id: 'PHONE_NUMBER'
                        }
                    }
                ]
            },
            {
                referenceType: 'FAMILY',
                firstName: 'PERSONA1',
                lastName: 'APPATERNO',
                surnames: 'APMATERNO',
                contactDetails: [
                    {
                        regionalCode: '555',
                        contact: '5543038111',
                        contactType: {
                            id: 'PHONE_NUMBER'
                        }
                    }
                ],
                relationship: 'BROTHER'
            }
        ]
    },
    autoCreditData: {
        agencyId : '19',
        vehicle: {
            vehicleType: 'CAR',
            condition: 'PREOWNED',
            year: '2013',
            brand: {
                id: '157',
                name: 'HONDA'
            },
            model: {
                id: '4',
                name: 'CITY'
            },
            bodyStyle: '1.2T FR AA EE CD BA QC ESTANDAR HATCHBACK 4 CIL 3 P 5 OCUP',
            price: {
                amount: '40000'
            }
        },
        initialPayment: {
            amount: '10000'
        },
        term: '24'
    },
    additionalLoanDetail: {
        broker: 'BROKER',
        employeeId: 'USERMB',
        branchId: 'USERCR',
        emailfandi: 'correoprueba2@dominio.com',
        agencyId: 2014,
        agencyName: 'NOMBRE AGENCIA',
        carAlliance: 'NOMBRE ALIANZA'
    }

};
describe('test to bbva market place', () => {
    it('should create the token', async() => {
        const res = await bbva.digitalAccount.create(
            account,
            'eJxt1MeOq1gUBdBfKXm...KqshJctUTsUwwYBPNpHWBS7AxmBy',
            '24919564');
    });

    it('should create the token', async() => {
        const res = await bbva.loan.create(
            vehicle,
            'eJxt1MeOq1gUBdBfKXm...KqshJctUTsUwwYBPNpHWBS7AxmBy',
            '24919564');
    });
});
