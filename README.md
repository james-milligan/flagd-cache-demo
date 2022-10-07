# flagd-cache-demo

Install the latest version of the Open feature operator, instructions can be found [here](https://github.com/open-feature/open-feature-operator)
```
k apply -f deploy.yaml -n open-feature-operator-system
minikube addons enable ingress 
minikube tunnel (if required)
```
The client app will be available at `http://localhost` and will be communicating via ingress with the flagd instance in the cluster.  

Pressing the button will trigger a flag evaluation, which will be taken from cache following the first successful request.
Update the FeatureFlagConfiguration spec in deploy.yaml and apply the changes, the console will log a cache bust for the specific flagkey and the next button press will trigger a flag evaluation.