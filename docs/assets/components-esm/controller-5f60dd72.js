/*! * KoliBri - The accessible HTML-Standard */ import{w as watchValidator}from"./prop.validators-05d07b50.js";const watchButtonType=(t,a,o)=>{watchValidator(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{watchValidator(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})};export{watchButtonType as a,watchButtonVariant as w};