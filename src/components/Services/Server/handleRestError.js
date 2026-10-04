
export const handleRestError = async (response) => {
  if (!response.ok) {
    let message = '';
    try {
      const data = await response.json();
      message = data?.error || data?.message || '';
    } catch (e) {
      message = response.statusText || 'Unknown error';
    }

    const statusCode = response.status;

    if (
      statusCode === 401 ||
      statusCode === 403 ||
      message.toLowerCase().includes('unauthorized') ||
      code === 'INVALID_CSRF'||
      code === 'UNAUTHORIZED' ||
      code === 'ID_FAIL'
    ) {
      window.dispatchEvent(new CustomEvent('sessionExpired'));
    }

    if (statusCode === 0 || statusCode >= 500) {
      window.dispatchEvent(new CustomEvent('networkError'));
    }

    throw new Error(message || `HTTP error ${statusCode}`);
  }

  return response.json();
};
