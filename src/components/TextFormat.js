
export const Header2FontSize = 48;
export const Header3FontSize = 32;
export const SubheaderFontSize = 20;
export const NormalTextFontSize = 16;

export const CaseStatus = {
    Awaiting:   '#F3ED51',
    Rejected:   '#F36551',
    Offered:    '#88FF88',
    Interview:  '#51A5F3',
    Info:       '#B1B1B1',
}

export const Header2Text = ({marginTop, marginBottom, marginLeft, marginRight, text, textAlign, position, top, bottom, left, right}
    ) => (
        <div
        style={{
            position: position,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            textAlign: textAlign,
            fontSize: Header2FontSize,
            fontWeight: 'bold',
        }}>
            {text}
        </div>
);

export const Header3Text = ({marginTop, marginBottom, marginLeft, marginRight, text, textAlign, position, top, bottom, left, right}
    ) => (
        <div
        style={{
            position: position,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            textAlign: textAlign,
            fontSize: Header3FontSize,
            fontWeight: 'bold',
        }}>
            {text}
        </div>
);

export const SubheaderText = ({marginTop, marginBottom, marginLeft, marginRight, text, textAlign, position, top, bottom, left, right}
    ) => (
        <div
        style={{
            position: position,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            textAlign: textAlign,
            fontSize: SubheaderFontSize,
            fontWeight: 550,
        }}>
            {text}
        </div>
);

export const SubheaderTextStyle = {
    textAlign: 'left',
    fontSize: SubheaderFontSize,
    fontWeight: 'normal',
}

export const Line = ({width, borderBottom, boxShadow, marginLeft, marginRight} = {
    width: '100%',
    borderBottom: '1px solid black',
    boxShadow: ''}
    ) => (
        <hr
        style={{
            width: width,
            borderBottom: borderBottom,
            boxShadow: boxShadow,
            marginLeft: marginLeft,
            marginRight: marginRight
        }}
        />
);

export const Margin = ({margin}) => (
        <hr
        style={{
            margin: margin
        }}
        />
);

export const MarginVerbose = ({marginTop, marginBottom, marginLeft, marginRight}) => (
    <div
    style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight
    }}
    ></div>
);
    