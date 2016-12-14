export default {
    /* validation messages, range [0, 99] */
    0: 'Field "Name" is required',
    1: 'Field "Name" must be a string',
    2: 'Name is already in use',
    3: '"default" is a reserved word',
    4: '. is not supported',
    5: 'Field {{args[0]}} should be a positive number',
    6: 'Field {{args[0]}} is required',
    7: 'Field {{args[0]}} is not a valid regular expression',
    8: 'Field {{args[0]}} should be in range [{{args[1]}}, {{args[2]}}]',
    9: 'Field {{args[0]}} should be greater than or equal to {{args[1]}}',
    10: 'Field {{args[0]}} should be less than or equal to {{args[1]}}',
    11: '{{args[0]}} is not a function',
    12: '{{args[0]}} is not a legal Regular Expression',
    13: '{{args[0]}} is not a legal number range',
    14: '{{args[0]}} {{args[1]}} is not legal as minimum and maximum length of a string',
    15: 'Field {{args[0]}} does not match Regular Expression {{args[1]}}',
    16: 'Field {{args[0]}} is not a number',
    17: 'Length of {{args[0]}} should be greater than or equal to {{args[1]}}',
    18: 'Length of {{args[0]}} should be less than or equal to {{args[1]}}',
    19: 'Field {{args[0]}} is not an valid {{args[1]}}',

    /* general messages, range [100, 499]*/
    100: 'Create New Input',
    // Delete dialog title
    101: 'Delete Confirmation',
    102: '"{{args[0]}}" cannot be deleted because it is in use',
    103: 'Are you sure you want to delete "{{args[0]}}" {{args[1]}}?',
    // Error dialog title
    104: 'Error Message',
    // Warning dialog title
    105: 'Warning',
    // Input table filter label
    106: 'Services',
    // Configuration table count label
    107: 'Items',
    // Saving prompt message
    108: 'Saving',
    // Loading index error message
    109: 'Failed to load index',
    // Configuration file error
    110: 'Error in an internal configuration file, it should be something wrong within the package or installation step. Contact your administrator for support. Detail: {{args[0]}}',
    111: 'URL',
    112: 'email address',
    113: 'IPV4 address',
    114: 'date in ISO 8601 format',

    '__unknow__': 'An unknown error occurred'
}
