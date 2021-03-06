package cn.itcast.core.controller;

import cn.itcast.core.pojo.seller.Seller;
import cn.itcast.core.service.SellerService;
import com.alibaba.dubbo.config.annotation.Reference;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 商家管理
 */
@RestController
@RequestMapping("seller")
public class SellerController {

    @Reference
    private SellerService sellerService;

    /*保存商家入驻信息*/
    @RequestMapping("add")
    public Result add(@RequestBody Seller seller) {
        try {
            sellerService.add(seller);
            return new Result(true, "申请入驻完成,审核中");
        } catch (Exception e) {
            //e.printStackTrace();
            return new Result(false, "申请入驻失败");
        }
    }
}
