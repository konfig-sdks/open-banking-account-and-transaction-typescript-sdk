type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/account-access-consents-POST': {
        parameters: [
            {
                name: 'Data'
            },
            {
                name: 'Risk'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/account-access-consents/{ConsentId}-DELETE': {
        parameters: [
            {
                name: 'ConsentId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/account-access-consents/{ConsentId}-GET': {
        parameters: [
            {
                name: 'ConsentId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/balances-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/balances-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/beneficiaries-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/beneficiaries-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/direct-debits-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/direct-debits-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/offers-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/offers-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/party-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/parties-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/party-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/product-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/products-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/scheduled-payments-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/scheduled-payments-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/standing-orders-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/standing-orders-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/statements-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
            {
                name: 'fromStatementDateTime'
            },
            {
                name: 'toStatementDateTime'
            },
        ]
    },
    '/statements-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'fromStatementDateTime'
            },
            {
                name: 'toStatementDateTime'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/statements/{StatementId}-GET': {
        parameters: [
            {
                name: 'StatementId'
            },
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/statements/{StatementId}/file-GET': {
        parameters: [
            {
                name: 'StatementId'
            },
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/statements/{StatementId}/transactions-GET': {
        parameters: [
            {
                name: 'StatementId'
            },
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/transactions-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
            {
                name: 'fromBookingDateTime'
            },
            {
                name: 'toBookingDateTime'
            },
        ]
    },
    '/transactions-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
            {
                name: 'fromBookingDateTime'
            },
            {
                name: 'toBookingDateTime'
            },
        ]
    },
}