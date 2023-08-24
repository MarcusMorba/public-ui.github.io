Der Input-Typ **Password** erzeugt ein Eingabefeld für Passwörter. Die Eingabe wird über Punktsymbole maskiert.

## Konstruktion

### Code

```html
<kol-input-password _label="Passwort" _smartButton='{"_icon": "codicon codicon-eye", "_hideLabel": true, "_label": "Passwort anzeigen"}'></kol-input-password>
```

### Beispiel

<kol-input-password _label="Passwort" _smartButton='{"_icon": "codicon codicon-eye", "_hideLabel": true, "_label": "Passwort anzeigen"}'></kol-input-password>

## Verwendung

### Best practices

- Achten sie darauf `id` und `name` korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.

## Barrierefreiheit

### Tastatursteuerung

| Taste | Funktion                    |
| ----- | --------------------------- |
| `Tab` | Fokussiert das Eingabefeld. |

## Links und Referenzen

- <kol-link _href="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _label="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _target="_blank"></kol-link>

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `_accessKey`    | `_access-key`    | Defines which key combination can be used to trigger or focus the interactive element of the component.                                                      | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_alert`        | `_alert`         | Defines whether the screen-readers should read out the notification.                                                                                         | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `true`      |
| `_autoComplete` | `_auto-complete` | Defines whether the input can be auto-completed.                                                                                                             | `"off"` \| `"on"` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `_disabled`     | `_disabled`      | Makes the element not focusable and ignore all events.                                                                                                       | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_error`        | `_error`         | Defines the error message text.                                                                                                                              | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_hasCounter`   | `_has-counter`   | Shows the character count on the lower border of the input.                                                                                                  | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_hideLabel`    | `_hide-label`    | Hides the label.                                                                                                                                             | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_hint`         | `_hint`          | Defines the hint text.                                                                                                                                       | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `''`        |
| `_icon`         | `_icon`          | Defines the icon classnames (e.g. `_icon="fa-solid fa-user"`).                                                                                               | `string` \| `undefined` \| `{ right?: IconOrIconClass` \| `undefined; left?: IconOrIconClass` \| `undefined; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined` |
| `_id`           | `_id`            | Defines the internal ID of the primary component element.                                                                                                    | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_label`        | `_label`         | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot. | `boolean` \| `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `undefined` |
| `_maxLength`    | `_max-length`    | Defines the maximum number of input characters.                                                                                                              | `number` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_name`         | `_name`          | Defines the technical name of an input field.                                                                                                                | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_on`           | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                                    | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined` |
| `_pattern`      | `_pattern`       | Defines a validation pattern for the input field.                                                                                                            | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_placeholder`  | `_placeholder`   | Defines the placeholder for input field. To be shown when there's no value.                                                                                  | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_readOnly`     | `_read-only`     | Makes the input element read only.                                                                                                                           | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_required`     | `_required`      | Makes the input element required.                                                                                                                            | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `_size`         | `_size`          | Setzt die Breite des Eingabefeldes in Buchstabenbreiten.                                                                                                     | `number` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_smartButton`  | `_smart-button`  | Allows to add a button with an arbitrary action within the element (_hide-label only).                                                                       | `string` \| `undefined` \| `{ _label: LabelWithExpertSlotPropType; } & { _tabIndex?: number` \| `undefined; _value?: Stringified<StencilUnknown>; _accessKey?: string` \| `undefined; _iconAlign?: AlignPropType` \| `undefined; _iconOnly?: boolean` \| `undefined; _role?: AlternativeButtonLinkRolePropType` \| `undefined; _ariaControls?: string` \| `undefined; _ariaCurrent?: AriaCurrentPropType` \| `undefined; _ariaExpanded?: boolean` \| `undefined; _ariaLabel?: string` \| `undefined; _ariaSelected?: boolean` \| `undefined; _on?: ButtonCallbacksPropType<StencilUnknown>` \| `undefined; _type?: ButtonTypePropType` \| `undefined; _variant?: ButtonVariantPropType` \| `undefined; _customClass?: string` \| `undefined; _disabled?: boolean` \| `undefined; _hideLabel?: boolean` \| `undefined; _icon?: IconPropType` \| `undefined; _id?: string` \| `undefined; _name?: string` \| `undefined; _syncValueBySelector?: string` \| `undefined; _tooltipAlign?: AlignPropType` \| `undefined; }` | `undefined` |
| `_tabIndex`     | `_tab-index`     | Defines which tab-index the primary element of the component has. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)             | `number` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `_tooltipAlign` | `_tooltip-align` | Defines where to show the Tooltip preferably: top, right, bottom or left.                                                                                    | `"bottom"` \| `"left"` \| `"right"` \| `"top"` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `'top'`     |
| `_touched`      | `_touched`       | Shows if the input was touched by a user.                                                                                                                    | `boolean` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `false`     |
| `_value`        | `_value`         | Defines the value of the input.                                                                                                                              | `string` \| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |


## Slots

| Slot | Description                         |
| ---- | ----------------------------------- |
|      | Die Beschriftung des Eingabefeldes. |


## Dependencies

### Depends on

- kol-input
- [kol-tooltip-wc](./tooltip)

### Graph
```mermaid
graph TD;
  kol-input-password --> kol-input
  kol-input-password --> kol-tooltip-wc
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  kol-alert --> kol-alert-wc
  kol-alert-wc --> kol-heading-wc
  kol-alert-wc --> kol-button-wc
  kol-alert-wc --> kol-icon
  style kol-input-password fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

