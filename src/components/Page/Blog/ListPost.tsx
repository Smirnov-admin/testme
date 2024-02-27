import { Post } from '../../../interface/interfacePosts'
import './ListPost.css'
import ViewLargePost from './ViewLargePost/ViewLargePost'
import ViewLittlePost from './ViewLittlePost/ViewLittlePost'
import ViewMiddlePost from './ViewMiddlePost/ViewMiddlePost'

function ListPost({date, title, text, image}: Post) {

  return (
    <>
        <section className='listPost_section'>
            <div className="lastPost_item_list">
                <div className="listPost_item">
                    <div className="listPost_item_viewLargePost">
                        <ViewLargePost date={date} title={title} text={text} image = {image} />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                    </div>
                </div>
                <div className="listPost_item">
                    <div className="listPost_item_viewMiddlePost">
                        <ViewMiddlePost date={date} title={title} text={text} image = {image} />
                        <ViewMiddlePost date={date} title={title} text={text} image = {image} />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                    </div>
                </div>
                <div className="listPost_item">
                    <div className="listPost_item_viewMiddlePost">
                        <ViewMiddlePost date={date} title={title} text={text} image = {image} />
                        <ViewMiddlePost date={date} title={title} text={text} image = {image} />
                    </div>
                    <div className="listPost_item_viewLittlePost">
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                        <ViewLittlePost date={date} title={title} text={text} image = {image} />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ListPost