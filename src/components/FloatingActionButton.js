import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../css/custom.css';
const FloatingActionButton = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const openModal = async () => {
    const commentsData = await fetchComments();
    setComments(commentsData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={openModal}>
        <FontAwesomeIcon icon={faComment} />
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Comments Modal"
      >
        <h3>Comments</h3>
        <CommentList comments={comments} />
        <CommentForm addComment={addComment} closeModal={closeModal} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default FloatingActionButton;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
  },
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor:'var(--ifm-color-primary)',
  color: '#fff',
  padding: '10px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
};

// Mock fetchComments function
const fetchComments = async () => {
  // Simulate fetching comments from an API or other source
  return [
    { id: 1, nickname: 'User1', text: 'This is a great comment!' },
    { id: 2, nickname: 'User2', text: 'I love this page!' },
    { id: 3, nickname: 'User3', text: 'Amazing work!' },
  ];
};

const addComment = (newComment) => {
  // Handle adding a new comment
};
