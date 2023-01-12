import styled from "@doar/shared/styled";

export const StyledCustomer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
    }
    h6 {
        margin-bottom: 0;
        font-size: 14px;
    }
`;

export const tableStyles = {
    headRow: {
        style: {
            paddingLeft: "20px",
        },
    },
    headCells: {
        style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            fontFamily: "'Rubik', sans-serif",
            "&[data-column-id='1']": {
                minWidth: "80px",
            },
            "&[data-column-id='2']": {
                minWidth: "140px",
            },
            "&[data-column-id='3']": {
                minWidth: "100px",
            },
            "&[data-column-id='4']": {
                minWidth: "80px",
            },
            "&[data-column-id='5']": {
                minWidth: "60px",
            },
            "&[data-column-id='6']": {
                minWidth: "60px",
            },
            "&[data-column-id='7']": {
                minWidth: "60px",
            },
        },
    },
    rows: {
        style: {
            paddingBlock: "20px",
            paddingLeft: "20px",
        },
    },
    cells: {
        style: {
            paddingLeft: "8px",
            paddingRight: "8px",
            fontFamily: "'Rubik', sans-serif",
            "&[data-column-id='1']": {
                minWidth: "80px",
                fontWeight: 500,
                color: "#7987a1",
            },
            "&[data-column-id='2']": {
                minWidth: "140px",
            },
            "&[data-column-id='3']": {
                minWidth: "100px",
            },
            "&[data-column-id='4']": {
                minWidth: "80px",
            },
            "&[data-column-id='5']": {
                minWidth: "60px",
            },
            "&[data-column-id='6']": {
                minWidth: "60px",
                "& > div ": {
                    color: "#fff",
                    padding: "2px 5px",
                    borderRadius: "5px",
                },
                "&.paid": {
                    "& > div": {
                        background: "#10b759",
                    },
                },
                "&.pending": {
                    "& > div": {
                        background: "#ffc107",
                    },
                },
            },
            "&[data-column-id='7']": {
                minWidth: "60px",
            },
        },
    },
    pagination: {
        style: {
            fontFamily: "'Rubik', sans-serif",
        },
    },
};
