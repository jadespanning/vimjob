Vim�UnDo� ?�8��?�9�"���d��>����$��y��7   �                                  XA��    _�                            ����                                                                                                                                                                                                                                                                                                                                                             XÁ    �   
      �      *class InstructorPortal extends Component {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             XA͹     �                5    Services.user.checkLoginStatus().then(function(){5�_�                    (        ����                                                                                                                                                                                                                                                                                                                            (          )          V       XAͻ    �   '   (              }).catch((err) => {   4        this.props.router.push('/instructorSignIn');5�_�                            ����                                                                                                                                                                                                                                                                                                                "          (          (          V       XAͽ    �   �   �            }�   �   �              )�   �   �                </div>�   �   �          	        }�   �   �                  <div/>�   �   �                  </div>:�   �   �          F          <InstructorFeed currentLecture={this.state.currentLecture}/>�   �   �          h          <MultipleChoiceQuestionForm createMultipleChoiceQuestion={this.createMultipleChoiceQuestion}/>�   �   �                    </div>�   �   �                      />�   �   �          .            instructor={this.props.instructor}�   �   �          "            lost={this.state.lost}�   �   �          (            allGood={this.state.allGood}�   �   �          0            getLectureInfo={this.getLectureInfo}�   �   �                       <ComprehensionViewer�      �          &          <div className="ui segment">�   ~   �                    </div>�   }             ~            <b>Verification Code:</b> {this.state.currentLecture?this.state.currentLecture.verificationCode:"Start a lecture"}�   |   ~                    <div>�   {   }          :        <div className="right floated twelve wide column">�   z   |          %        {(this.state.lectureActive) ?�   y   {                  </div>�   x   z                    </div>�   w   y                      />�   v   x          .            instructor={this.props.instructor}�   u   w          .            createLecture={this.createLecture}�   t   v                      <CourseList�   s   u          &          <div className="ui segment">�   r   t                    </div>�   q   s                      />�   p   r          .            instructor={this.props.instructor}�   o   q          ,            createCourse={this.createCourse}�   n   p                      <Course�   m   o          &          <div className="ui segment">�   l   n          7        <div className="left floated four wide column">�   k   m                <div className="ui grid">�   j   l              return (�   i   k            render(){�   g   i            }�   f   h                }, 1000);�   e   g          	        }�   d   f          <          this.getLectureInfo(this.state.currentLecture._id)�   c   e          %        if(this.state.lectureActive){�   b   d                setInterval(() =>{�   a   c            startPoll() {�   ^   `            }�   ]   _          	      });�   \   ^          "        console.log("err: ", err);�   [   ]                }).catch((err) => {�   Z   \          	        }�   Y   [                    console.log(res)�   X   Z                  else{�   W   Y          	        }�   V   X                    });�   U   W                      return prevState;�   T   V          .            prevState.lost = res.content.lost;�   S   U          4            prevState.allGood = res.content.allGood;�   R   T          ;            prevState.currentLecture = res.content.lecture;�   Q   S          +            prevState.lectureActive = true;�   P   R          (          this.setState((prevState) => {�   O   Q                  if (res.success){�   N   P                .then((res) => {�   M   O          1    Services.instructor.getLectureInfo(lectureID)�   L   N            getLectureInfo(lectureID){�   J   L            }�   I   K          4    this.props.createCourse(courseNumber,courseName)�   H   J          (  createCourse(courseNumber,courseName){�   F   H            }�   E   G                })�   D   F                   console.log("err: ",err)�   C   E                }).catch((err)=>{�   B   D          	        }�   A   C                    });�   @   B                      return prevState;�   ?   A          *            prevState.lectureActive = true�   >   @          :            prevState.currentLecture = res.content.lecture�   =   ?          (          this.setState((prevState) => {�   <   >                  if (res.success){�   ;   =                .then((res)=>{�   :   <          w    Services.instructor.createMultipleChoiceQuestion(this.state.currentLecture._id,question,options,correctOptionIndex)�   9   ;          D  createMultipleChoiceQuestion(question,options,correctOptionIndex){�   7   9            }�   6   8                })�   5   7          	        }�   4   6                    this.startPoll();�   3   5                    });�   2   4                      return prevState;�   1   3          *            prevState.lectureActive = true�   0   2          :            prevState.currentLecture = res.content.lecture�   /   1          (          this.setState((prevState) => {�   .   0                  if (res.success){�   -   /                .then((res) => {�   ,   .          /    Services.instructor.createLecture(courseId)�   +   -            createLecture(courseId){�   (   *            }�   '   )              });�   &   (          	      });�   %   '          
        })�   $   &                    return prevState;�   #   %          )          prevState.lectureActive = false�   "   $          $        that.setState((prevState)=>{�   !   #                }).catch((err) => {�       "                  that.startPoll();�      !          2        that.getLectureInfo(res.content.lectureID)�                 C      Services.instructor.checkCurrentLecture().then(function(res){5�_�                    '       ����                                                                                                                                                                                                                                                                                                                "          (          (          V       XA��    �   &   '              });5�_�                     '        ����                                                                                                                                                                                                                                                                                                                '          '          '          V       XA��    �   �   �          }�   �   �            )�   �   �          
    </div>�   �   �              }�   �   �                <div/>�   �   �                </div>:�   �   �          B      <InstructorFeed currentLecture={this.state.currentLecture}/>�   �   �          d      <MultipleChoiceQuestionForm createMultipleChoiceQuestion={this.createMultipleChoiceQuestion}/>�   �   �                </div>�   �   �                />�   �   �          (      instructor={this.props.instructor}�   �   �                lost={this.state.lost}�   �   �          "      allGood={this.state.allGood}�   �   �          *      getLectureInfo={this.getLectureInfo}�      �                <ComprehensionViewer�   ~   �          "      <div className="ui segment">�   }                   </div>�   |   ~          x      <b>Verification Code:</b> {this.state.currentLecture?this.state.currentLecture.verificationCode:"Start a lecture"}�   {   }                <div>�   z   |          8      <div className="right floated twelve wide column">�   y   {          !    {(this.state.lectureActive) ?�   x   z          
    </div>�   w   y          
    </div>�   v   x              />�   u   w          &    instructor={this.props.instructor}�   t   v          &    createLecture={this.createLecture}�   s   u              <CourseList�   r   t               <div className="ui segment">�   q   s          
    </div>�   p   r              />�   o   q          &    instructor={this.props.instructor}�   n   p          $    createCourse={this.createCourse}�   m   o              <Course�   l   n               <div className="ui segment">�   k   m          3    <div className="left floated four wide column">�   j   l              <div className="ui grid">�   i   k          
  return (�   h   j          	render(){�   f   h          }�   e   g            }, 1000);�   d   f              }�   c   e          8      this.getLectureInfo(this.state.currentLecture._id)�   b   d          !    if(this.state.lectureActive){�   a   c            setInterval(() =>{�   `   b          startPoll() {�   ]   _          }�   \   ^              });�   [   ]                 console.log("err: ", err);�   Z   \              }).catch((err) => {�   Y   [                }�   X   Z                  console.log(res)�   W   Y                else{�   V   X                }�   U   W                  });�   T   V                    return prevState;�   S   U          ,          prevState.lost = res.content.lost;�   R   T          2          prevState.allGood = res.content.allGood;�   Q   S          9          prevState.currentLecture = res.content.lecture;�   P   R          )          prevState.lectureActive = true;�   O   Q          &        this.setState((prevState) => {�   N   P                if (res.success){�   M   O              .then((res) => {�   L   N          /  Services.instructor.getLectureInfo(lectureID)�   K   M          getLectureInfo(lectureID){�   I   K          }�   H   J          2  this.props.createCourse(courseNumber,courseName)�   G   I          &createCourse(courseNumber,courseName){�   E   G          }�   D   F              })�   C   E                console.log("err: ",err)�   B   D              }).catch((err)=>{�   A   C                }�   @   B                  });�   ?   A                    return prevState;�   >   @          (          prevState.lectureActive = true�   =   ?          8          prevState.currentLecture = res.content.lecture�   <   >          &        this.setState((prevState) => {�   ;   =                if (res.success){�   :   <              .then((res)=>{�   9   ;          u  Services.instructor.createMultipleChoiceQuestion(this.state.currentLecture._id,question,options,correctOptionIndex)�   8   :          BcreateMultipleChoiceQuestion(question,options,correctOptionIndex){�   6   8          }�   5   7              })�   4   6                }�   3   5                  this.startPoll();�   2   4                  });�   1   3                    return prevState;�   0   2          (          prevState.lectureActive = true�   /   1          8          prevState.currentLecture = res.content.lecture�   .   0          &        this.setState((prevState) => {�   -   /                if (res.success){�   ,   .              .then((res) => {�   +   -          -  Services.instructor.createLecture(courseId)�   *   ,          createLecture(courseId){�   '   )          }�   &   (            });5��