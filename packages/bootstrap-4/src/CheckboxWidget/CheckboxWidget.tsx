import React from "react";

import { WidgetProps, schemaRequiresTrueValue } from "@rjsf/utils";
import Form from "react-bootstrap/Form";

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    disabled,
    readonly,
    label,
    schema,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;
  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  const _onChange = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onBlur(id, checked);
  const _onFocus = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, checked);

  const desc = label || schema.description;
  return (
    <Form.Group
      className={`checkbox ${disabled || readonly ? "disabled" : ""}`}
    >
      <Form.Check
        id={id}
        name={id}
        label={desc}
        checked={typeof value === "undefined" ? false : value}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={_onChange}
        type="checkbox"
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </Form.Group>
  );
};

export default CheckboxWidget;
