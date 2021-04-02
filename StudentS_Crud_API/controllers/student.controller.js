const details=require('../models/student.model')

exports.student_create=function(req,res){
    let add_details=new details({
        name:req.body.name,
        reg_no:req.body.reg_no,
        email:req.body.email
    });

    add_details.save(function(err,next){
        if(err){
            //it doesnot crash the application when there is any error
            return next(err);
        }
        else{ 
            res.send('Student Created Successfully');
        }
        
    })
};

exports.student_update = function (req, res) {
    
    details.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, std) {
        if (err){
             return next(err);
        }
        else{
        res.send('Student Updated.');
        }
    });
};

exports.student_delete = function (req, res) {
    details.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        else{
        res.send('Deleted successfully!');
      }
    })
};

exports.student_details = function (req, res) {
    details.findById(req.params.id, function (err, std) {
        if (err) {
            return next(err);
        }
        else{
        res.send(std);
        }
    })
};
