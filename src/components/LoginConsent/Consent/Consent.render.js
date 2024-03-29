import React from "react";
import Button from '@mui/material/Button';
import DividedText from "../../../containers/DividedText";

export const ConsentRender = function () {
  const { loading } = this.state
  const { loginConsentRequest } = this.props
  const { request } = loginConsentRequest
  const { signing_id, challenge } = request
  const { clien } = challenge

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          padding: 32,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <a href="#">{signing_id}</a>
            &nbsp;{` is requesting permission for the following`}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <DividedText
            left={<div style={{ fontWeight: "bold" }}>{this.leftText.join("\n")}</div>}
            right={<div>{this.rightText.join("\n")}</div>}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="text"
              disabled={loading}
              color="secondary"
              onClick={() => this.cancel()}
              style={{
                width: 120,
                marginRight: 32,
                padding: 8,
              }}
            >
              {"Back"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={loading || this.props.activeIdentity == null}
              onClick={() => this.tryLogin()}
              style={{
                width: 120,
                padding: 8,
              }}
            >
              {"Agree"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

