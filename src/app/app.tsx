import { DsTypography } from "../index"

export function App() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <DsTypography variant="display-d1">Display D1</DsTypography>
      <DsTypography variant="display-d2">Display D2</DsTypography>
      <DsTypography variant="display-d3">Display D3</DsTypography>

      <DsTypography variant="h1">Heading 1</DsTypography>
      <DsTypography variant="h2">Heading 2</DsTypography>
      <DsTypography variant="h3">Heading 3</DsTypography>
      <DsTypography variant="h4">Heading 4</DsTypography>
      <DsTypography variant="h5">Heading 5</DsTypography>
      <DsTypography variant="h6">Heading 6</DsTypography>

      <DsTypography variant="body-lg">
        Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </DsTypography>
      <DsTypography variant="body-md">
        Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </DsTypography>
      <DsTypography variant="body-sm">
        Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </DsTypography>

      <DsTypography variant="caption">
        Caption Text - Lorem ipsum dolor sit amet.
      </DsTypography>
      <DsTypography variant="overline">OVERLINE TEXT</DsTypography>
      <DsTypography variant="micro">Micro text - 11px</DsTypography>
    </div>
  )
}
