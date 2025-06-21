import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button onClick={toggleLike} style={{ fontSize: '24px' }}>
        {liked ? '👍 Liked' : '🤍 Like'}
      </button>
    </div>
  );
}

export default LikeButton;
