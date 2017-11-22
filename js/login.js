$(function(){
    //表单校验

    var $form = $('form');
    $form.bootstrapValidator({

        //配置校验时的图标
        feedbackIcons: {
            //校验成功的图标
            valid: 'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },

          //配置校验的规则
          //字段,你想要校验哪些字段
          fields: {
            //username对应的表单中name属性。
            username: {
              //username的规则
              validators: {
                notEmpty: {
                  message: "用户名不能为空"
                },
                callback: {
                  message:"用户名不存在"
                }
              }
      
            },
            password: {
      
              //password的规则
              validators: {
                notEmpty: {
                  message: "用户密码不能为空"
                },
                stringLength: {
                  min: 6,
                  max: 12,
                  message: "密码长度是6-12位"
                },
                callback: {
                  message:"密码错误"
                }
              }
      
            }
          }

    })



    //需要给表单注册一个校验成功的事件
    $form.on('success.form.bv', function (e) {
        //阻止浏览器的默认行为
        e.preventDefault();
        //使用ajax提交逻辑

        //发送ajax请求
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$form.serialize(), 
            success:function(data){
                //如果跳转成功就跳转到首页
                if(data.success){
                    location.href = "index.html";
                }

                if(data.error === 1000){
                    //第一个参数:改变哪个字段
                    //第二个参数:改成什么状态,
                    //VALID:通过 INVALID:不通过
                    //第三个参数:选择提示的信息
                    $form.data("bootstrapValidator").updateStatus("username","INVALID","callback");
                }
                
                if(data.error === 1001){
                    $form.data("bootstrapValidator").updateStatus("password","INVALID","callback");
                }
            }
        })
    });


    //重置功能,重置样式
    $("[type='reset']").on("click",function(){

        //重置样式
        $form.data("bootstrapValidator").resetForm();

    })
})