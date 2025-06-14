function likeVideo(videoId) {
  const user = auth.currentUser;
  if (!user) return alert("Login required!");

  const likeRef = db.ref("likes/" + videoId + "/" + user.uid);
  likeRef.once("value", snap => {
    if (snap.exists()) {
      likeRef.remove();
    } else {
      likeRef.set(true);
    }
  });
}

function commentVideo(videoId, comment) {
  const user = auth.currentUser;
  if (!user) return alert("Login required!");

  const commentRef = db.ref("comments/" + videoId).push();
  commentRef.set({
    userId: user.uid,
    comment: comment,
    timestamp: Date.now()
  });
}
