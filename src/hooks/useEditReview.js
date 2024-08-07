import { useState } from 'react';

const useEditReview = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editReview = async (reviewId, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const id = updatedData.id
      const parceRate = parseInt(updatedData.rate)
      delete updatedData.created_at
      delete updatedData.deleted_at
      delete updatedData.id
      const response = await fetch(`${url}/${reviewId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...updatedData, rate: parceRate}),
      });
      if (!response.ok) {
        throw new Error('Failed to update review');
      }
      alert('Review updated successfully');
    } catch (err) {
      setError(err);
      console.error('Error updating review:', err);
    } finally {
      setLoading(false);
    }
  };

  return { editReview, loading, error };
};

export default useEditReview;
