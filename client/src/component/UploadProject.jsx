import '../css/UploadProject.css'
import PropTypes from 'prop-types';
import AddProject from './AddProject';

function UploadProject(props) {
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <div className="body">
                        <h5 className="text-xl font-bold text-blue-500 mb-8">{props.title}  <strong>👇</strong></h5>
                        <AddProject showAlert={props.showAlert} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Props Vadilation
UploadProject.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    showAlert: PropTypes.func,
};

export default UploadProject