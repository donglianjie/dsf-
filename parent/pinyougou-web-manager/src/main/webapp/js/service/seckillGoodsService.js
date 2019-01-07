//服务层
app.service('seckillGoodsService',function($http){

	//查询实体
	this.findOne=function(id){
		return $http.get('../seckillGoods/findOne.do?id='+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post('../seckillGoods/add.do',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post('../seckillGoods/update.do',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get('../seckillGoods/delete.do?ids='+ids);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../seckillGoods/search.do?page='+page+"&rows="+rows, searchEntity);
	}    

	//更新秒杀商品状态
	this.updateStatus = function(ids,status){
		return $http.get('../seckillGoods/updateStatus.do?ids='+ids+"&status="+status);
	}
});
