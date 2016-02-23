import config from '../config';

export default function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  }

  return adjustedPath;
}