import styled from 'styled-components';

// Modal atoms
// Styled components for table elements
export const TableWrapper = styled.div`

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px;
  `;

export const TableHeader = styled.thead`
    height: 10vh;
    padding: 8px;
    `;

export const TableHeadRow = styled.tr`
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border-top: 1px solid rgba(27, 31, 35, 0.15); /* Top border */
  border-bottom: 1px solid rgba(27, 31, 35, 0.15); /* Bottom border */
  &:first-child{
  border-right: 0px solid rgba(27, 31, 35, 0.15); /* Right border */
  border-left: 1px solid rgba(27, 31, 35, 0.15); /* Left border */
    border-radius: 20px 0px 0px 0px;
  }
  &:last-child{
  border-right: 1px solid rgba(27, 31, 35, 0.15); /* Right border */
  border-left: 0px solid rgba(27, 31, 35, 0.15); /* Left border */
    border-radius: 0px 20px 0px 0px;
  }
`;

export const TableRow = styled.tr`
padding: 4px;
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid rgba(27, 31, 35, 0.33);
  &:nth-child(1) { width: 5% ;}
  &:nth-child(2) { width: 26% ;}
  &:nth-child(3) { width: 15% ;}
  &:nth-child(4) { max-width: 8% ;}
  &:nth-child(5) { width: 8% ;}
  &:nth-child(6) { width: 8% ;}
  &:last-child {
    width: 30%;
  background-color: rgba(0, 0, 0, 0.08); 
}
`;
