import {Rule} from 'antd/lib/form';

import {
    whitespace,
    required,
    alphabetLetters,
    email,
    confirmPassword,
} from './helpers';

export const emailValidationRules = [
    required('Please enter an email'),
    email,
];

export const passwordValidationRules = [
    required('Please enter a password'),
];

export const confirmPasswordValidationRules = [
    required('Please confirm your password'),
    confirmPassword,
];

export const cityValidationRules = [
    required('Please enter a city'),
    alphabetLetters,
];

export const countryValidationRules = [
    required('Please enter a country'),
    alphabetLetters,
];

export const agencyValidationRules = [
    required('Please enter an agency'),
];

export const getCommonValidationRules = (text: string): Rule[] => [
    required(text),
    whitespace,
];

export const getAlphabetValidationRules = (text: string): Rule[] => [
    required(text),
    alphabetLetters,
    whitespace,
];
