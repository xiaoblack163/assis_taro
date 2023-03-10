import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import { FC } from 'react';
import pawsvg from "../image/logo.svg";

const ComLoading: FC<{ className?: string, isIndex?: boolean; }> = ({ className, isIndex, }) =>
  <>
    <View className={classNames("dcl", className, {
      pt10vh: !Boolean(className)
    })}>
      <View className='weui-loading'></View>
      <View className='pbt6 cccplh'>加载中...</View>
    </View>
    {isIndex && <View className='ww dxyl'>
      <View className='hhh20'></View>
      <Image className='wwwhhh20' src={pawsvg} />
      <View className='hhh40'></View>
    </View>}
  </>;
export default ComLoading



