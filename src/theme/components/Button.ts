import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const dayButtonActive = defineStyle({
    background: '#f1d1c1',
    color: '#ff5403',
    border: '1px solid',
    borderColor: '#ff5403',
})

const dayButtonInActive = defineStyle({
    background: '#ffffff',
    color: '#31373d',
    border: '1px solid',
    borderColor: '#e2e4e9',
})

export const buttonTheme = defineStyleConfig({
    variants: { dayButtonActive, dayButtonInActive },
})