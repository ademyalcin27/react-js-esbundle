import { Cell } from '@/state';
import CodeCell from '@/components/codeCell/code-cell';
import TextEditor from '@/components/textEditor';
import ActionBar from '@/components/actionBar/action-bar';
import '@/components/cellList/cell-list-item.css';

interface CellListItemProps { 
    cell: Cell
}

const CellListItem: React.FC <CellListItemProps> = ({cell}) => {
    let child: JSX.Element;
    child = cell.type === 'code' ? 
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell}/>
      </> :
      <>
        <TextEditor cell={cell}/>
        <ActionBar id={cell.id} />
      </>
   
    return <div className='cell-list-item'>
      {child}
    </div>
}

export default CellListItem