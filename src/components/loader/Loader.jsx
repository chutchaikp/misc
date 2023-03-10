import './loader.scss';

export default function Loader({ type }) {
  const COUNTER = 8;

  const FeedSkeleton = () => (
    <div>
      <div className="posts">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
      </div>

      <div className="posts">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
      </div>

      <div className="posts">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
      </div>

      <div className="posts">
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
        <div className="post"></div>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="topSk">
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkImg"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const Circle = () => <div className="circle">xxxx</div>;

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );

  // if (type === 'feed') return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === 'feed')
    return Array.from(Array(8).keys()).map((x, idx) => (
      <FeedSkeleton key={idx} />
    ));
  if (type === 'top') return <TopSkeleton />;
  if (type === 'menu') return <MenuSkeleton />;
  if (type === 'circle') return <Circle />;
  if (type === 'custom') return <CustomLoading />;

  return <div>type: ['feed', 'top', 'menu', 'circle', 'custom']</div>;
}
