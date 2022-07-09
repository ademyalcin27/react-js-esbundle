import '@/components/addCell/add-cell.css';
import { useActions } from '@/hooks/use-actions';
import cs from 'classnames';

interface AddCellProps {
    previousCellId: string | null;
    forceVisible?: Boolean
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
    const  { insertCellAfter } = useActions()
    return <div className={cs({'add-cell': true, 'force-visible': forceVisible})}>
        <div className='add-buttons'>
            <button className='button is-rounded is-primary is-small' onClick={() => insertCellAfter(previousCellId, 'code')}>
                <span className='icon is-small'>
                    <i className="fas fa-plus"></i>
                </span>
                <span>Code</span>
            </button>
            <button className='button is-rounded is-primary is-small' onClick={() => insertCellAfter(previousCellId, 'text')}>
                <span className='icon is-small'>
                    <i className="fas fa-plus"></i>
                </span>
                <span>Text</span>
            </button>
        </div>
        <div className='divider'></div>
    </div>
};

export default AddCell;